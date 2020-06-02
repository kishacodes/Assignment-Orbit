import { Component, OnInit, Input } from "@angular/core";
import { Satellite } from "../satellite";

@Component({
  selector: "app-orbit-counts",
  templateUrl: "./orbit-counts.component.html",
  styleUrls: ["./orbit-counts.component.css"],
})
export class OrbitCountsComponent implements OnInit {
  @Input() satellites: Satellite[];
  constructor() {}

  ngOnInit() {}

  findCountOf(key: string) {
    let count: number = 0;
    for (let satellite of this.satellites) {
      if (this.satellites["type"] === key) count = count + 1;
    }
    return count;
  }
}
