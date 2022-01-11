import { Component, Inject, Input, OnInit } from '@angular/core';
import { Bookcase } from 'src/app/library/domain/Bookcase';
import { Rack } from 'src/app/library/domain/Rack';
import { BookcaseService } from 'src/app/library/service/bookcase.service';
import { RackService } from 'src/app/library/service/rack.service';

@Component({
  selector: 'app-bookcase-rack-editor',
  templateUrl: './bookcase-rack-editor.component.html',
  styleUrls: ['./bookcase-rack-editor.component.css']
})
export class BookcaseRackEditorComponent implements OnInit {

  @Input() bookcase!: Bookcase;
  rackList !: Rack[]
  rackName: string = '';

  constructor(private rackService: RackService, private bookcaseService: BookcaseService) { }

  ngOnInit(): void {
    this.loadRackList();
  }

  onDelete(rack:Rack) : void{
    this.rackService.deleteAssociation(rack._links.bookcase.href)
    .subscribe(_ => this.loadRackList());
  }

  onCreate(): void {
    let rack = new Rack(this.rackName);
    this.rackService.add(rack).subscribe(r => {
      this.rackService.updateByOneUrl(r._links.bookcase.href, this.bookcase._links.self.href)
      .subscribe(_ => {
        this.rackName = "";
        this.loadRackList();
      });
    });
  }

  loadRackList(): void {
    this.rackService.findByUrl(this.bookcase._links.rackList.href).subscribe(response => this.rackList = response._embedded.rack);
  }
}
