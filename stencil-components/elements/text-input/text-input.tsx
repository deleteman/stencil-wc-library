import { Host, Component, Prop, h } from '@stencil/core';


@Component({
  tag: 'st-text-input',
  styleUrl: 'st-text-input.css',
  shadow: true,
})
export class TextInput {
  /**
   * The first name
   */
  @Prop() text: string;

  /**
   * The middle name
   */
  @Prop() placeholder?: string;

  /**
   * The last name
   */
  @Prop() label?: string;

  render() {
    if(this.label) {
      return <Host><label >{this.label}<input type="text" placeholder={this.placeholder}></input></label></Host>;
    }
    return <Host><input type="text" placeholder={this.placeholder}></input></Host>;
  }
}
