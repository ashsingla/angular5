import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../../shared/common/common.service';

@Component({
  selector: 'app-about-page',
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {
  constructor(private commonService: CommonService) {
    
  }
  ngOnInit() {
    this.commonService.mainSlider();
  }
}
