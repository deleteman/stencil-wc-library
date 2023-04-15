import { Component, Host,Prop, h } from '@stencil/core';

@Component({
  tag: 'st-stack',
  styleUrl: 'st-stack.css',
  shadow: true,
})
export class Stack {
  /**
   * The first name
   */
  @Prop() direction: string;

  render() {
    let classes = ["hm-stack"]
    if(this.direction == "horizontal") classes.push("horizontal")
    if(this.direction == "vertical") classes.push("vertical")

    return <Host class={classes.join(" ")}>
      <slot></slot>
    </Host>
  }
}

