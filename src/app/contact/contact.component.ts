import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.formulario = this.formBuilder.group({
      accessKey: ['a814cec3-81f5-4303-beef-28ab88f2f1a8'],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: [''],
      message: ['', Validators.required]
    });
  }

  handleSubmit() {
    if (this.formulario.valid) {
      this.http.post('https://api.staticforms.xyz/submit', this.formulario.value).subscribe({
        next: (response) => {
          console.log(response);
          alert('Formulário enviado com sucesso!');
        },
        error: (error) => {
          console.log(error);
          alert('Erro ao enviar o formulário.');
        }
      });
    } else {
      alert('Por favor, preencha todos os campos corretamente.');
    }
  }
}
