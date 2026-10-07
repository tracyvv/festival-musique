class Evenement {
  constructor(titre, debut, duree, jour, scene) {
    this.titre = titre;
    this.debut = debut;
    this.duree = duree;
    this.jour = jour;
    this.scene = scene;
  }

  heureFin() {
    const heures = Number(this..slice(0, 2));
    const minutes = Number(this..slice(3, 5));
    const total = heures * 60 + minutes + this.;

    let h = Math.floor(total / 60) % 24;
    let m = total % 60;
    if (h < 10) h = "0" + h;
    if (m < 10) m = "0" + m;

    return h + ":" + m;
  }

  carte() {
    return `
      <li class="carte">
        <h3>${this.titre}</h3>
        <p>${this.debut} - ${this.heureFin()}</p>
      </li>`;
  }
}
