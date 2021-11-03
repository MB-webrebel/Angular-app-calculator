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

import { Injectable } from '@angular/core';

import { Operation } from './operation';

/**
 * Služba pro operace kalkulačky.
 * @export
 */
@Injectable({ providedIn: 'root' })
export class CalculatorService {

  /**
   * Sečte daná čísla a vrátí výsledek.
   * @param x první číslo
   * @param y druhé číslo
   * @returns výsledek sčítání
   */
  add(x: number, y: number): number { return x + y; }

  /**
   * Odečte druhé číslo od prvního a vrátí výsledek.
   * @param x první číslo
   * @param y druhé číslo
   * @returns výsledek odčítání
   */
  subtract(x: number, y: number): number { return x - y; }

  /**
   * Vynásobí daná čísla a vrátí výsledek.
   * @param x první číslo
   * @param y druhé číslo
   * @returns výsledek násobení
   */
  multiply(x: number, y: number): number { return x * y; }

  /**
   * Vydělí první číslo druhým bezezbytku a vrátí výsledek.
   * @param x první číslo
   * @param y druhé číslo
   * @returns výsledek dělení
   */
  divide(x: number, y: number): number { return x / y; }

  /**
   * Zavolá zadanou operaci a vrátí její výsledek.
   * @param operation zadaná operace
   * @param x první číslo pro operaci
   * @param y druhé číslo pro operaci
   * @returns výsledek operace
   */
  calculate(operation: Operation, x: number, y: number): number {
    switch (operation) {
      case Operation.ADD: return this.add(x, y);
      case Operation.SUBTRACT: return this.subtract(x, y);
      case Operation.MULTIPLY: return this.multiply(x, y);
      case Operation.DIVIDE: return this.divide(x, y);
    }
    return null; // Sem by se nikdy nemělo dojít.
  }
}
