import { Router, ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { RedAsignadosService } from '../../services/red/red-asignados.service';
import { RedAsignado } from "../../services/red/RedAsignado";

@Component({
  selector: 'app-red-asignados',
  templateUrl: './red-asignados.component.html',
  styleUrls: ['./red-asignados.component.css']
})
export class RedAsignadosComponent implements OnInit {

  redsAsignados: RedAsignado[] = null;
  idUsuario: number;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private redAsignadosService: RedAsignadosService) {

  }

  ngOnInit() {
    this.idUsuario = this.activatedRoute.snapshot.params.idUsuario; //TODO Temporal.
    this.getREDsAsignados();
  }

  getREDsAsignados(): void {
    this.redAsignadosService.getREDs(this.idUsuario).subscribe(redsAsignado => this.redsAsignados = redsAsignado);
  }

}

