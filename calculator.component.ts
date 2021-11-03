/*
 *  _____ _______         _                      _
 * |_   _|__   __|       | |                    | |
 *   | |    | |_ __   ___| |___      _____  _ __| | __  ___ ____
 *   | |    | | '_ \ / _ \ __\ \ /\ / / _ \| '__| |/ / / __|_  /
 *  _| |_   | | | | |  __/ |_ \ V  V / (_) | |  |   < | (__ / /
 * |_____|  |_|_| |_|\___|\__| \_/\_/ \___/|_|  |_|\_(_)___/___|
 *                   ___
 *                  |  _|___ ___ ___
 *                  |  _|  _| -_| -_|  LICENCE
 *                  |_| |_| |___|___|
 *
 * IT ZPRAVODAJSTVÍ  <>  PROGRAMOVÁNÍ  <>  HW A SW  <>  KOMUNITA
 *
 * Tento zdrojový kód pochází z IT sociální sítě WWW.ITNETWORK.CZ
 *
 * Můžete ho upravovat a používat jak chcete, musíte však zmínit
 * odkaz na http://www.itnetwork.cz
 */

import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { CalculatorService } from '../services/calculator.service';
import { Operation } from '../services/operation';

/**
 * Komponenta kalkulačky.
 * @export
 */
@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {

  /** Výsledek operace nebo null. */
  result: number | null = null;

  /** Formulář kalkulačky s jeho sestavením. */
  calculatorForm = this.formBuilder.group({
    x: [0, Validators.required],
    y: [0, Validators.required],
    operation: ['', Validators.required]
  });

  /**
   * Konstruktor s injektovanou službou pro sestavování formulářů a pro práci s operacemi kalkulačky.
   * @param formBuilder automaticky injektovaná služba pro sestavování formulářů
   * @param calculatorService automaticky injektovaná služba pro práci s operacemi kalkulačky
   */
  constructor(private formBuilder: FormBuilder, private calculatorService: CalculatorService) { }

  /** Getter pro existující operace kalkulačky. */
  get operations() { return Operation; }

  /** Funkce vykonaná při úspěšném odeslání formuláře kalkulačky, která zpracuje odeslané hodnoty. */
  onSubmit(): void {
    const values = this.calculatorForm.value; // Získání odeslaných hodnot z formuláře.
    const operation: keyof typeof Operation = values.operation; // Převod operace na hodnotu číselníku.
    // Necháme si vypočítat výsledek podle zvolené operace a zadaných hodnot.
    this.result = this.calculatorService.calculate(Operation[operation], values.x, values.y);
  }
}
