import Image from "next/image";
import styles from "./page.module.css";
import imgPost from "@/article-preview-component-master/images/drawers.jpg"
import avatarImg from "@/article-preview-component-master/images/avatar-michelle.jpg"

import shareIcon from "@/article-preview-component-master/images/icon-share.svg"
import facebookIcon from "@/article-preview-component-master/images/icon-facebook.svg"
import twitterIcon from "@/article-preview-component-master/images/icon-twitter.svg"
import pinterestIcon from "@/article-preview-component-master/images/icon-pinterest.svg"

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.component}>
        <div className={styles.imgcontainer}>
          <Image
            src={imgPost}
          />
        </div>
        <div className={styles.content}>
          <h2>
            Shift the overall look and feel by adding these wonderful touches to furniture in your home
          </h2>
          <p>Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting.I've got some simple tips to help you make any room feel complete</p>
          <div className={styles.avatarcontainer}>
            <div className={styles.avatarbox}>
              <Image src={avatarImg} />
              <div className={styles.avatarname}>
                <p className={styles.name}>Michelle Appleton</p>
                <p className={styles.date}>28 Jun 2020</p>
              </div>
            </div>
            <div className={styles.sharecontainer}>
              <Image
                src={shareIcon}
              />
              <div className={styles.sharemenu}>
                <div className={styles.menuitem}>
                  <p>Share</p>
                  <a href="#">
                    <Image src={facebookIcon} />
                  </a>
                  <a href="#">
                    <Image src={twitterIcon} />
                  </a>
                  <a href="#">
                    <Image src={pinterestIcon} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
