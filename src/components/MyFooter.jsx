import React from "react";


export const MyFooter = () => {
  return (
    <div class="bg-light fs-6 ">
        
      <ul class="d-flex">
        <ol>Informazioni</ol>
        <ol>Accessibilità</ol>
        <ol>Talent Solutions</ol>
      </ul>
      <ul class="d-flex">
        <ol>Linee guida della community</ol>
        <ol>Carriera</ol>
        <ol>Soluzioni di marketing</ol>
      </ul>
      <ul class="d-flex">
        <ol>Privacy e condizioni</ol>
        <ol>Opzioni di annuncio</ol>
        <ol>Pubblitcità</ol>
      </ul>
      <ul class="d-flex">
        <ol>Sales Solutions</ol>
        <ol>Mobile</ol>
        <ol>Piccole imprese</ol>
      </ul>
      <ul class = "d-flex">
        <ol>Centro sicurezza</ol>
      </ul>
      
<br></br>
<div class="d-flex" >
      <label for="cars">Scegli una lingua:</label>

<select name="cars" id="cars">
  <option value="italiano">Italiano</option>
  <option value="Tedesco">Tedesco</option>
  <option value="Inglese">Inglese</option>
  <option value="Spagnolo">Spagnolo</option>
</select>
</div>
    </div>
  );
};
