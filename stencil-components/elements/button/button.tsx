import { Component, Listen, Prop, h } from '@stencil/core';

@Component({
  tag: 'st-button',
  // styleUrl: 'my-stencil-comp.css',
  shadow: true,
})
export class Button {
  /**
   * The first name
   */
  @Prop() text: string;

  /**
   * The middle name
   */
  @Prop() onClick: () => void;

  @Listen('click')
  clickHandler() {
    if(this.onClick) {
      return this.onClick()
    }
  }

  render() {
    return <button >{this.text}</button>;
  }
}

