import { Component, OnInit, signal, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Menu } from '../../services/menu';

@Component({
  selector: 'app-qr-code',
  imports: [CommonModule, FormsModule],
  templateUrl: './qr-code.html',
  styleUrl: './qr-code.scss',
})
export class QrCode implements OnInit {
  @ViewChild('canvas', { static: false }) canvas?: ElementRef<HTMLCanvasElement>;

  menuUrl = signal('https://yourmenu.example.com');
  qrSize = signal(256);
  qrGenerated = signal(false);
  restaurantName = signal('');

  constructor(private menuService: Menu) { }

  ngOnInit() {
    this.menuService.menu$.subscribe(menu => {
      this.restaurantName.set(menu.restaurantName);
    });
  }

  async generateQRCode() {
    try {
      // Dynamic import of QRCode library
      const QRCode = (await import('qrcode')).default;

      if (this.canvas) {
        const canvas = this.canvas.nativeElement;
        await QRCode.toCanvas(canvas, this.menuUrl(), {
          width: this.qrSize(),
          margin: 2,
          color: {
            dark: '#000000',
            light: '#FFFFFF',
          },
        });
        this.qrGenerated.set(true);
      }
    } catch (error) {
      console.error('Error generating QR code:', error);
      alert('Failed to generate QR code. Please try again.');
    }
  }

  downloadQRCode() {
    if (this.canvas) {
      const canvas = this.canvas.nativeElement;
      const url = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.download = `${this.restaurantName()}-menu-qr.png`;
      link.href = url;
      link.click();
    }
  }

  updateSize() {
    if (this.qrGenerated()) {
      this.generateQRCode();
    }
  }
}
