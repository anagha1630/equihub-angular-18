// Updated tooltip.directive.ts
import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTooltip]'
})
export class TooltipDirective {
  @Input('appTooltip') tooltipText: string = '';
  tooltip: HTMLElement | null = null;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') onMouseEnter() {
    if (!this.tooltip && this.tooltipText) {
      this.createTooltip();
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    if (this.tooltip) {
      this.hideTooltip();
    }
  }

  createTooltip() {
    // Create tooltip element
    this.tooltip = this.renderer.createElement('div');
    this.renderer.addClass(this.tooltip, 'tooltip');
    
    // Add the text
    const text = this.renderer.createText(this.tooltipText);
    this.renderer.appendChild(this.tooltip, text);
    
    // Add to DOM to get dimensions
    this.renderer.appendChild(document.body, this.tooltip);
    
    // Set initial position off-screen to not flash
    this.renderer.setStyle(this.tooltip, 'position', 'fixed');
    this.renderer.setStyle(this.tooltip, 'top', '-1000px');
    this.renderer.setStyle(this.tooltip, 'left', '-1000px');
    
    // Position after a brief delay to ensure tooltip has been rendered
    setTimeout(() => this.positionTooltip(), 0);
  }

  positionTooltip() {
    if (!this.tooltip) return;
    
    const hostPos = this.el.nativeElement.getBoundingClientRect();
    const tooltipPos = this.tooltip.getBoundingClientRect();
    
    // Calculate position - above the element
    const top = hostPos.top - tooltipPos.height - 10;
    const left = hostPos.left + (hostPos.width - tooltipPos.width) / 2;
    
    // Check if tooltip would go off screen
    const adjustedTop = Math.max(10, top); // Keep at least 10px from top
    const adjustedLeft = Math.max(10, Math.min(left, window.innerWidth - tooltipPos.width - 10));
    
    // Set position
    this.renderer.setStyle(this.tooltip, 'top', `${adjustedTop}px`);
    this.renderer.setStyle(this.tooltip, 'left', `${adjustedLeft}px`);
    
    // Add a visible class for fade-in effect
    this.renderer.addClass(this.tooltip, 'tooltip-visible');
  }

  hideTooltip() {
    if (this.tooltip) {
      this.renderer.removeChild(document.body, this.tooltip);
      this.tooltip = null;
    }
  }
}