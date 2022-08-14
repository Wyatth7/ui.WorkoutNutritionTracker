import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-circle',
  templateUrl: './progress-circle.component.html',
  styleUrls: ['./progress-circle.component.scss'],
})
export class ProgressCircleComponent implements OnInit {
  @Input() progress!: { total: number; progress: number };

  titleValue!: string;
  subtitleValue!: string;
  percentValue!: number;

  constructor() {}

  ngOnInit(): void {
    // convert progress to percent
    this.percentValue = (this.progress.progress / this.progress.total) * 100;
    this.titleValue = this.percentValue + '%';
    this.subtitleValue = this.progress.progress + '/' + this.progress.total;
  }
}
