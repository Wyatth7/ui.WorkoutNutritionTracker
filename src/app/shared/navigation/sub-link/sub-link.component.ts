import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-link',
  templateUrl: './sub-link.component.html',
  styleUrls: ['./sub-link.component.scss'],
})
export class SubLinkComponent implements OnInit {
  @Input() text!: string;
  route!: string;

  constructor() {}

  ngOnInit(): void {}
}
