import React from "react";
import FooterStyle from "./footer.module.css";
import { AiFillFacebook, AiFillTwitterSquare, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";

export default function Footer() {
  return (
    <>
      {/* 1 */}
      <footer class={FooterStyle.footerClass}>
        {/* 2 */}
        <div class={FooterStyle.mainDiv1}>
          {/* 3 */}
          <div class={FooterStyle.sub1MainDiv1}>
            <form>
             <p>Subscribe Us</p>
              <input type="email" required></input>
              <button>Submit</button>
            </form>
          </div>
          {/* 3 closes */}
          {/* 4 */}
          <div class={FooterStyle.sub2MainDiv1}>
          {/* 5 */}
            <div class={FooterStyle.sub2P1MainDiv1}>
              <img class={FooterStyle.logoChange} src="https://cdn.glitch.global/1f2e8776-0d5d-40c2-b754-4ea7e29b14c7/logorem.png" alt="logo" />
              <p class={FooterStyle.paraG}>Make some awesome blogs!</p>
            </div>
          {/* 5 closes */}
          {/* 6 */}
            <div class={FooterStyle.sub2P2MainDiv1}>
              <ul>
                <li>About</li>
                <li>Jobs</li>
                <li>Docs</li>
              </ul>
            </div>
            {/* 6 closes */}
          </div>
          {/* 4 closes */}
        </div>
        {/* 2 closes */}

        
        {/* 7 */}
        <div class={FooterStyle.mainDiv2}>
          {/* 8 */}
          <div class={FooterStyle.sub1MainDiv2}>
            <img src="https://cdn.glitch.global/1f2e8776-0d5d-40c2-b754-4ea7e29b14c7/shipremove.png" alt="sailing pic" class={FooterStyle.posterChange} />
          </div>
          {/* 8 closes */}
          {/* 9 */}
          <div class={FooterStyle.sub2MainDiv2}>
            {/* 10 */}
            <div class={FooterStyle.sub2P1MainDiv2}>
              <ul>
                <li class={FooterStyle.li}>Terms and Conditions</li>
                <li class={FooterStyle.li}>Privacy Policy</li>
                <li class={FooterStyle.li}>Cookie Policy</li>
              </ul>
            </div>
            {/* 10 closes */}
            {/* 11 */}
            <div class={FooterStyle.sub2P2MainDiv2}>
              {/* 12 */}
              <div class={FooterStyle.sub2P2s1MainDiv2}>
                <p class={FooterStyle.p}>Let's chat!</p>
                <p class={FooterStyle.p}>email us</p>
                {/* 13 closes */}
                <div class={ FooterStyle.logosP}>
                  <AiFillFacebook class={FooterStyle.logoPF} />
                  <AiFillTwitterSquare class={FooterStyle.logoPF}  />
                  <AiFillLinkedin class={FooterStyle.logoPF} />
                  <AiFillInstagram class={FooterStyle.logoPF} />
                </div>
                {/* 13 closes */}
              </div>
              {/* 12 closes */}
            </div>
            {/* 11 closes */}
          </div>
          {/* 9 closes */}
        </div>
        {/* 7 closes */}
        
      </footer>
       {/* 1 closes */}
    </>
  );
}
