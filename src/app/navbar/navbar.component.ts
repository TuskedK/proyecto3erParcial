import { Component, OnInit, AfterViewInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IonButton} from '@ionic/angular/standalone';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: true,
  imports: [ CommonModule, IonButton, RouterLink]
})
export class NavbarComponent implements OnInit, AfterViewInit {
  isMenuOpen = false;
  isMobile = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {}

  ngAfterViewInit() {
    setTimeout(() => {
      this.checkScreenSize();
    }, 0);
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.isMobile = window.innerWidth <= 980;
    if (!this.isMobile) {
      this.isMenuOpen = false;
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}