import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'st-card',
  styleUrl: 'st-card.css',
  shadow: true,
})
export class Card {

  render() {
    return <Host>
      <slot></slot>
    </Host>;
  }
}
