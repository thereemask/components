import {Directive, HostListener, Input, OnInit} from '@angular/core';

interface Regexes {
  text: RegExp;
  number: RegExp;
}

@Directive({
  selector: '[audPreventInput]',
})
export class PreventInput implements OnInit {
  @Input() audPreventInput: keyof Regexes = 'text';

  selectedRegEx!: RegExp;
  selectedPasteRegEx!: RegExp;

  regEx: Regexes = {
    text: /[A-Za-z\s]+/,
    number: /[0-9]+/,
  };

  pasteRegEx: Regexes = {
    text: /[^A-Za-z\s]/g,
    number: /[^0-9]/g,
  };

  ngOnInit() {
    this.selectedRegEx = this.regEx[this.audPreventInput];
    this.selectedPasteRegEx = this.pasteRegEx[this.audPreventInput];
  }

  @HostListener('keypress', ['$event'])
  onKeyPress(evt: KeyboardEvent) {
    return new RegExp(this.selectedRegEx).test(evt.key);
  }

  @HostListener('paste', ['$event'])
  onPaste(evt: ClipboardEvent) {
    evt.preventDefault();
    const data = evt.clipboardData?.getData('text/plain');
    const pasteData = data?.replace(this.selectedPasteRegEx, '');
    /*TODO(Sameer): Replace with supported command*/
    document.execCommand('insertHTML', false, pasteData);
  }
}
