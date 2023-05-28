import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Ellipse1Icon } from './Ellipse1Icon';
import classes from './HomePage.module.css';

interface Props {
  className?: string;
}
/* @figmaId 121:405 */
export const HomePage: FC<Props> = memo(function HomePage(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.homePage}></div>
      <div className={classes.yIFU}>YIFU</div>
      <div className={classes.signUp}></div>
      <div className={classes.logIn}></div>
      <div className={classes.women}></div>
      <div className={classes.men}></div>
      <div className={classes.kids}></div>
      <div className={classes.home}></div>
      <div className={classes.accessories}></div>
      <div className={classes.searchProducts}>Search products </div>
      <div className={classes.line1}></div>
      <div className={classes.ellipse1}>
        <Ellipse1Icon className={classes.icon} />
      </div>
      <div className={classes.line2}></div>
      <div className={classes.featuredBase}></div>
      <div className={classes.trendsThisSeason}></div>
      <div className={classes.furBoots}></div>
      <div className={classes.nikeSlippers}></div>
      <div className={classes.girlOutfit1}></div>
      <div className={classes.girlOutfit2}></div>
      <div className={classes.bar}></div>
      <div className={classes.shopNow}></div>
      <div className={classes.donTMissOutOnHolidayDeals}></div>
      <div className={classes.rectangle1}></div>
      <div className={classes.shopByProduct}></div>
      <div className={classes.whiteCoat}></div>
      <div className={classes.rectangle4}></div>
      <div className={classes.outerwear}></div>
      <div className={classes.pants}></div>
      <div className={classes.rectangle5}></div>
      <div className={classes.bottoms}></div>
      <div className={classes.bags}></div>
      <div className={classes.rectangle6}></div>
      <div className={classes.bags2}></div>
      <div className={classes.bar2}></div>
      <div className={classes.seeWhatOthersAreSharing}></div>
      <div className={classes.user1}></div>
      <div className={classes.user2}></div>
      <div className={classes.user3}></div>
      <div className={classes.user4}></div>
      <div className={classes.user5}></div>
      <div className={classes.user6}></div>
    </div>
  );
});
