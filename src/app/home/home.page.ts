import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  // Data for dropdown select options
  classData = ['IF22A', 'IF22B', 'IF22C', 'IF22D'];

  // Data untuk ditampilkan
  personData = [
    { id: 1, name: 'Jibrail', nim: '2241625520124', class: 'IF22A' }
  ];

  // Data yang akan dimasukkan
  dataWillSubmitted = { id: 0, name: '', nim: '', class: '' };

  // Flag untuk mode edit
  isEditedMode = false;

  // ID untuk data yang sedang diedit
  editId: number | null = null;

  // Tambahkan data baru
  submitData() {
    if (this.isEditedMode) {
      alert('Sedang dalam mode edit, silakan simpan perubahan.');
      return;
    }
    if (this.dataWillSubmitted.name && this.dataWillSubmitted.nim && this.dataWillSubmitted.class) {
      const newId = this.personData.length > 0 ? this.personData[this.personData.length - 1].id + 1 : 1;
      this.personData.push({ ...this.dataWillSubmitted, id: newId });
      this.resetForm();
    } else {
      alert('Semua data harus diisi!');
    }
  }

  // Buka form edit
  openEditForm(person: any) {
    this.isEditedMode = true;
    this.editId = person.id;
    this.dataWillSubmitted = { ...person };
  }

  // Simpan perubahan data
  editData() {
    if (this.editId !== null) {
      const index = this.personData.findIndex(person => person.id === this.editId);
      if (index !== -1) {
        this.personData[index] = { ...this.dataWillSubmitted, id: this.editId };
        this.resetForm();
        this.isEditedMode = false;
        this.editId = null;
      }
    }
  }

  // Hapus data
  onDelete(id: number) {
    this.personData = this.personData.filter(person => person.id !== id);
  }

  // Reset form input
  resetForm() {
    this.dataWillSubmitted = { id: 0, name: '', nim: '', class: '' };
  }
  openModal () {
  this.dataWillSubmitted = { id: 0, name: '', nim: '', class: '' };
  }
}
