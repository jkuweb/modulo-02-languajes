// 5-SLOT MACHINE
class SlothMachine {
  private moneyCount: number = 0;
  private static numberOfRoulettes = 2;

  private counter(): () => number {
    let i: number = 0;
    return () => ++i;
  }

  private generateRoulettes(): boolean[] {
    let roulettes: boolean[] = [];

    const num = Math.round(Math.random() * 1);
    for (let i = 0; i <= SlothMachine.numberOfRoulettes; i++) {
      if (num === 1) {
        roulettes.push(true);
      } else {
        roulettes.push(false);
      }
    }
    console.log(roulettes);
    return roulettes;
  }

  private checkResult(results: boolean[]): boolean {
    for (const result of results) {
      if (result !== true) {
        return false;
      }
    }
    return true;
  }

  private showResultMessage(result: boolean): void {
    if (result) {
      console.log(`Congratulations!!. You won ${this.moneyCount} coins`);
      this.setMoneyCounterToCero();
    } else {
      console.log("Good luck next time!!");
    }
  }

  private setMoneyCounterToCero(): void {
    this.moneyCount = 0;
  }

  public play(): void {
    this.moneyCount += this.counter()();
    const roulettes = this.generateRoulettes();
    const result = this.checkResult(roulettes);
    this.showResultMessage(result);
  }
}

const machine1 = new SlothMachine();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
