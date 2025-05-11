import { Component, OnInit } from '@angular/core';
import { NzCascaderOption } from 'ng-zorro-antd/cascader';
import { NzIconService } from 'ng-zorro-antd/icon';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  selectedValue: string[] = [];
  nzOptions: NzCascaderOption[] = [
    {
      value: 'Custom SVG Icon Example',
      label: 'Custom SVG Icon Example',
      icon: 'custom:star',
      children: [
        { value: 'SVG Icon', label: 'SVG Icon', icon: 'custom:star', isLeaf: true }
      ]
    },
    {
      value: 'Asset SVG Icon Example',
      label: 'Asset SVG Icon Example',
      icon: 'asset:star',
      children: [
        { value: 'Asset SVG Icon', label: 'Asset SVG Icon', icon: 'asset:star', isLeaf: true }
      ]
    },
    {
      value: 'Accessories',
      label: 'Accessories',
      icon: 'appstore',
      children: [
        { value: 'Carry Cases', label: 'Carry Cases', icon: 'shopping', isLeaf: true },
        { value: 'Stylus Pens', label: 'Stylus Pens', icon: 'edit', isLeaf: true }
      ]
    },
    {
      value: 'Audio / Visual',
      label: 'Audio / Visual',
      icon: 'customer-service',
      children: [
        { value: 'Speakers', label: 'Speakers', icon: 'sound', isLeaf: true },
        { value: 'Microphones', label: 'Microphones', icon: 'audio', isLeaf: true }
      ]
    },
    {
      value: 'Cables',
      label: 'Cables',
      icon: 'api',
      children: [
        { value: 'HDMI', label: 'HDMI', icon: 'swap-right', isLeaf: true },
        { value: 'USB', label: 'USB', icon: 'usb', isLeaf: true }
      ]
    },
    {
      value: 'Cameras & Video',
      label: 'Cameras & Video',
      icon: 'camera',
      children: [
        { value: 'Webcams', label: 'Webcams', icon: 'video-camera', isLeaf: true },
        { value: 'DSLR', label: 'DSLR', icon: 'camera', isLeaf: true }
      ]
    },
    {
      value: 'Computer Components',
      label: 'Computer Components',
      icon: 'build',
      children: [
        { value: 'GPUs', label: 'GPUs', icon: 'bar-chart', isLeaf: true },
        { value: 'RAM', label: 'RAM', icon: 'block', isLeaf: true }
      ]
    },
    {
      value: 'Computer Systems',
      label: 'Computer Systems',
      icon: 'desktop',
      children: [
        { value: 'Laptops', label: 'Laptops', icon: 'laptop', isLeaf: true },
        { value: 'Desktops', label: 'Desktops', icon: 'desktop', isLeaf: true }
      ]
    },
    {
      value: 'Consumables & Stationery',
      label: 'Consumables & Stationery',
      icon: 'copy',
      children: [
        { value: 'Paper', label: 'Paper', icon: 'file-text', isLeaf: true },
        { value: 'Ink Cartridges', label: 'Ink Cartridges', icon: 'highlight', isLeaf: true }
      ]
    },
    {
      value: 'Furniture',
      label: 'Furniture',
      icon: 'table',
      children: [
        { value: 'Chairs', label: 'Chairs', icon: 'user', isLeaf: true },
        { value: 'Desks', label: 'Desks', icon: 'table', isLeaf: true }
      ]
    },
    {
      value: 'Monitors & Displays',
      label: 'Monitors & Displays',
      icon: 'fund-view',
      children: [
        { value: 'LCD', label: 'LCD', icon: 'desktop', isLeaf: true },
        { value: 'LED', label: 'LED', icon: 'eye', isLeaf: true }
      ]
    },
    {
      value: 'Networking',
      label: 'Networking',
      icon: 'global',
      children: [
        { value: 'Routers', label: 'Routers', icon: 'wifi', isLeaf: true },
        { value: 'Switches', label: 'Switches', icon: 'branches', isLeaf: true }
      ]
    },
    {
      value: 'Phones',
      label: 'Phones',
      icon: 'mobile',
      children: [
        { value: 'Smartphones', label: 'Smartphones', icon: 'mobile', isLeaf: true },
        { value: 'Landlines', label: 'Landlines', icon: 'phone', isLeaf: true }
      ]
    },
    {
      value: 'Point of Sale',
      label: 'Point of Sale',
      icon: 'credit-card',
      children: [
        { value: 'POS Terminals', label: 'POS Terminals', icon: 'credit-card', isLeaf: true }
      ]
    },
    {
      value: 'Power Devices',
      label: 'Power Devices',
      icon: 'thunderbolt',
      children: [
        { value: 'UPS', label: 'UPS', icon: 'battery', isLeaf: true }
      ]
    },
    {
      value: 'Printers & Scanners',
      label: 'Printers & Scanners',
      icon: 'printer',
      children: [
        { value: 'Laser Printers', label: 'Laser Printers', icon: 'printer', isLeaf: true },
        { value: 'Scanners', label: 'Scanners', icon: 'scan', isLeaf: true }
      ]
    },
    {
      value: 'Projectors',
      label: 'Projectors',
      icon: 'project',
      children: [
        { value: 'HD Projectors', label: 'HD Projectors', icon: 'eye', isLeaf: true }
      ]
    },
    {
      value: 'Security',
      label: 'Security',
      icon: 'safety-certificate',
      children: [
        { value: 'Antivirus', label: 'Antivirus', icon: 'shield', isLeaf: true },
        { value: 'Firewalls', label: 'Firewalls', icon: 'fire', isLeaf: true }
      ]
    },
    {
      value: 'Services',
      label: 'Services',
      icon: 'tool',
      children: [
        { value: 'IT Support', label: 'IT Support', icon: 'setting', isLeaf: true }
      ]
    },
    {
      value: 'Software',
      label: 'Software',
      icon: 'code',
      children: [
        { value: 'OS', label: 'OS', icon: 'windows', isLeaf: true },
        { value: 'Productivity', label: 'Productivity', icon: 'file-text', isLeaf: true }
      ]
    },
    {
      value: 'Stationery',
      label: 'Stationery',
      icon: 'file-text',
      children: [
        { value: 'Pens', label: 'Pens', icon: 'edit', isLeaf: true },
        { value: 'Notebooks', label: 'Notebooks', icon: 'book', isLeaf: true }
      ]
    },
    {
      value: 'Storage',
      label: 'Storage',
      icon: 'database',
      children: [
        { value: 'Hard Drives', label: 'Hard Drives', icon: 'hdd', isLeaf: true },
        { value: 'SSDs', label: 'SSDs', icon: 'dashboard', isLeaf: true }
      ]
    },
    {
      value: 'Telecommunications',
      label: 'Telecommunications',
      icon: 'global',
      children: [
        { value: 'VoIP', label: 'VoIP', icon: 'cloud', isLeaf: true }
      ]
    },
    {
      value: 'Warranty & Services',
      label: 'Warranty & Services',
      icon: 'safety',
      children: [
        { value: 'Extended Support', label: 'Extended Support', icon: 'clock-circle', isLeaf: true }
      ]
    },
    {
      value: 'Uncategorized',
      label: 'Uncategorized',
      icon: 'folder-open',
      children: [
        { value: 'Miscellaneous', label: 'Miscellaneous', icon: 'question', isLeaf: true }
      ]
    }
  ];




  constructor(
    private iconService: NzIconService,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    // Method 1: Register custom SVG icon from iconfont
    this.iconService.fetchFromIconfont({
      scriptUrl: 'https://at.alicdn.com/t/font_8d5l8fzk5b87iudi.js'
    });

    // Method 2: Register SVG icon directly as a string
    this.iconService.addIconLiteral('custom:star', '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M256 80C149.9 80 62.4 159.4 49.6 262c9.4-3.8 19.6-6 30.4-6c26.5 0 48 21.5 48 48l0 128c0 26.5-21.5 48-48 48c-44.2 0-80-35.8-80-80l0-16 0-48 0-48C0 146.6 114.6 32 256 32s256 114.6 256 256l0 48 0 48 0 16c0 44.2-35.8 80-80 80c-26.5 0-48-21.5-48-48l0-128c0-26.5 21.5-48 48-48c10.8 0 21 2.1 30.4 6C449.6 159.4 362.1 80 256 80z"/></svg>');

    // Method 3: Register SVG icon from assets folder (static path)
    // In a real application, you would typically load the SVG file from assets
    this.http.get('assets/icons/star.svg', { responseType: 'text' })
      .subscribe((svg) => {
        this.iconService.addIconLiteral('asset:star', svg);
      });
  }

  onChanges(values: string[]): void {
    console.log(values);
  }
}
