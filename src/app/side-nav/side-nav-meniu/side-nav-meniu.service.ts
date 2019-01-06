export class SideMeniuService{
  private sideMeniuData = [{ name: "domain", desc: "Acasa" },
    // { name: "person", desc: "person" },
    { name: "assessment", desc: "Statistici" },
    { name: "settings", desc: "Setari" },
    // { name: "account_balance_wallet", desc: "Balans" },
    { name: "history", desc: "Istoric" },
    { name: "access_time", desc: "Programari" },
    { name: "exit_to_app", desc: "Ieșire" }];
    getSideMeniuData(){
        return this.sideMeniuData;
    }
}   