import icoArcade from "@/public/images/icon-arcade.svg";
import icoAdvance from "@/public/images/icon-advanced.svg";
import icoPro from "@/public/images/icon-pro.svg";

export enum PlansEnum {
 arcade = "arcade",
 advanced = "advanced",
 pro = "pro",
}

const PLAN_DATA = {
 title: "Select your plan",
 desc: "You have the option of monthly or yearly billing.",
 plans: [
  {
   type: PlansEnum.arcade,
   name: "Arcade",
   icon: icoArcade,
   monthly: 9,
   yearly: 90,
   prom: "2 months free",
  },
  {
   type: PlansEnum.advanced,
   name: "Advanced",
   icon: icoAdvance,
   monthly: 120,
   yearly: 12,
   prom: "2 months free",
  },
  {
   type: PlansEnum.pro,
   name: "Pro",
   icon: icoPro,
   monthly: 150,
   yearly: 15,
   prom: "2 months free",
  },
 ],
};

export default PLAN_DATA;
