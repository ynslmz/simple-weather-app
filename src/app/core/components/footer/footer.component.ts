import { Component, OnInit } from "@angular/core";

@Component({
  selector: "swa-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"],
})
export class FooterComponent implements OnInit {
  constructor() {}

  date = new Date();
  ngOnInit(): void {}
}
