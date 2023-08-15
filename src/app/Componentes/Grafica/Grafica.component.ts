import { AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import Chart from 'chart.js/auto';
import { Datos_Grafica, Datos_Observacion } from 'src/app/Datos';
@Component({
  selector: 'app-Grafica',
  templateUrl: './Grafica.component.html',
  styleUrls: ['./Grafica.component.css']
})
export class GraficaComponent implements OnChanges {
  @Input() Datos:any;

  chart1: any;
  chart2: any;
  ngOnInit() {
   this.createChart();
   this.createChart2();
  }
  
  constructor(){
   
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes['Datos'] && changes['Datos'].currentValue) {
      this.actualizarGrafica();
    }
  }
 
  actualizarGrafica(){
    if (this.chart1) {
      // Actualizar los datos de la gráfica
      this.chart1.data.datasets[0].data = this.Datos["numeros"];
     
      // Llamar al método update() para redibujar la gráfica con los nuevos datos
      this.chart1.update();
 
    } 
    if (this.chart2) {
      // Actualizar los datos de la gráfica
      this.chart2.data.datasets[0].data = [this.Datos["cantidad"]["pordebajo"], this.Datos["cantidad"]["cantidadEnRango"],this.Datos["cantidad"]["porencima"]];
     
      // Llamar al método update() para redibujar la gráfica con los nuevos datos
      this.chart2.update();
 
    } 
  }
  createChart() {
    const canvas = document.getElementById('myChart') as HTMLCanvasElement;
    const ctx= (canvas.getContext('2d')as CanvasRenderingContext2D);

    this.chart1 = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Menor a 10cm', '10-12cm', '12-15cm','15-18cm','18-21cm','21-24cm','24-27cm','27-30cm','30-33cm',"Mayor a 33"],
        datasets: [{
          label: 'Datos de ejemplo',
          data: this.Datos["numeros"],
          backgroundColor: ['#F0C81E','#F0C81E','rgba(0, 175, 0, 0.85)','rgba(0, 175, 0, 1)','rgba(0, 175, 0, 1)','rgba(0, 175, 0, 1)','rgba(0, 175, 0, 1)','rgba(0, 175, 0, 1)', 'rgba(225, 0, 0, 1)', 'rgba(225, 0, 0, 1)'],
          borderColor: ['rgba(0, 0, 0, 1)'],
          borderWidth: 1
        }]
      },
      options: {
        plugins: {
          title: {
              display: true,
              text: 'Tamaño de brocolis detectados',
              font: {
                  
                  size: 22,
                  weight: 'bold'
              }
          }
      },
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
  createChart2() {
    const canvas = document.getElementById('myCircle') as HTMLCanvasElement;
    const ctx= (canvas.getContext('2d')as CanvasRenderingContext2D);

    this.chart2 = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Menor a 10cm','10-33cm','Mayor a 33cm'],
        datasets: [{
          label: 'Datos de ejemplo',
          data: [this.Datos["cantidad"]["pordebajo"], this.Datos["cantidad"]["cantidadEnRango"],this.Datos["cantidad"]["porencima"]],
          backgroundColor: ['rgba(255, 206, 0, 0.7)', 'rgba(0, 196, 0, 0.6)','rgba(255,0, 0, 0.7)'],
          borderColor: ['rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)','rgba(0, 0, 0, 1)' ],
          borderWidth: 1.2
        }]
      },
      options: {
        plugins: {
          title: {
              display: true,
              text: 'Categoria por tamaño',
              font: {
                  size: 22,
                  weight: 'bold'
              }
          }
      },
        scales: {
          y: {
            beginAtZero: true
          }
        }
        
      }
      
    });
  }
}