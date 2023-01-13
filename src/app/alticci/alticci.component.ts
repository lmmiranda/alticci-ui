import { Component, OnInit } from '@angular/core';
import { AlticciService } from './alticci.service';

@Component({
  selector: 'app-alticci',
  templateUrl: './alticci.component.html',
  styleUrls: ['./alticci.component.scss']
})
export class AlticciComponent implements OnInit {

  n: number = 100;
  value: number = 0;

  constructor(private alticciService: AlticciService) { }

  ngOnInit(): void {
  }

  handleClick() {
    this.alticciService.calculate(this.n).subscribe(value => this.value = value as number);
  }
}
