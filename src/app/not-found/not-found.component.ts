import { isPlatformServer } from '@angular/common';
import { Component, Inject, OnInit, Optional, PLATFORM_ID } from '@angular/core';
import { REQUEST, RESPONSE } from '@nguniversal/express-engine/tokens';
import { Request, Response } from 'express';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  constructor(@Optional() @Inject(REQUEST) private request: Request,
    @Optional() @Inject(RESPONSE) private response: Response,
    @Inject(PLATFORM_ID) private platformId: any) { }

  ngOnInit(): void {
    if (isPlatformServer(this.platformId)) {
      this.response.status(404);
    }
  }

}
