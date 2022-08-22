import React from "react";
import FooterStyle from "./footer.module.css";

export default function Footer() {
  return (
    <>
      <footer class={FooterStyle.footerClass}>
        <div class={FooterStyle.mainDiv1}>
          <div class={FooterStyle.sub1MainDiv1}>
            <form>
             <p>Subscribe Us</p>
              <input type="email" required></input>
              <button>Submit</button>
            </form>
          </div>

          <div class={FooterStyle.sub2MainDiv1}>
            <div class={FooterStyle.sub2P1MainDiv1}>
              <img class={FooterStyle.logoChange} src="https://cdn.glitch.global/1f2e8776-0d5d-40c2-b754-4ea7e29b14c7/logorem.png" alt="logo" />
              <p class={FooterStyle.paraG}>Make some awesome blogs!</p>
            </div>

            <div class={FooterStyle.sub2P2MainDiv1}>
              <ul>
                <li>About</li>
                <li>Jobs</li>
                <li>Docs</li>
              </ul>
            </div>
          </div>
        </div>

        <div class={FooterStyle.mainDiv2}>
          <div class={FooterStyle.sub1MainDiv2}>
            <img src="https://cdn.glitch.global/1f2e8776-0d5d-40c2-b754-4ea7e29b14c7/shipremove.png" alt="sailing pic" class={FooterStyle.posterChange} />
          </div>

          <div class={FooterStyle.sub2MainDiv2}>
            <div class={FooterStyle.sub2P1MainDiv2}>
              <ul>
                <li>Terms and Conditions</li>
                <li>Privacy Policy</li>
                <li>Cookie Policy</li>
              </ul>
            </div>
            <div class={FooterStyle.sub2P2MainDiv2}>
              <div class={FooterStyle.sub2P2s1MainDiv2}>
                <h6 class={FooterStyle.h6}>Let's chat!</h6>
                <p class={FooterStyle.p}>email us</p>
                <div class={FooterStyle.logoCahin}></div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
