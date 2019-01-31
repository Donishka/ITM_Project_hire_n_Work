import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  @Input() name: string;
  @Input() listItems: string[];
  @Input() placeHolder: string;

  @Output() itemSelect = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.initDropdown();
  }

  itemClicked(item: string) {
    this.name = item;
    this.itemSelect.emit(item);
  }

  initDropdown() {

    var _btns = document.querySelectorAll('.cat'),

      _eachBtn = function (callback) {
        Array.prototype.forEach.call(_btns, function (elem) {
          callback.call(this, elem);
        });
      },
      _initListener = function (e) {
        e.preventDefault();
        e.stopPropagation();
        _eachBtn(function (cat) {
          cat.classList.remove('dropdown-open')
        });
        this.classList.toggle('dropdown-open');
      },
      _hideAll = function () {
        _eachBtn(function (cat) {
          cat.classList.remove('dropdown-open');
        });
      };

    _eachBtn(function (cat) {
      cat.addEventListener('touchend', function (e) {
        _initListener.call(this, e);
      });

      cat.addEventListener('click', function (e) {
        _initListener.call(this, e);
      });
    });

    document.addEventListener('touchend', function () {
      _hideAll();
    });

    document.addEventListener('click', function () {
      _hideAll();
    });

  };
}
