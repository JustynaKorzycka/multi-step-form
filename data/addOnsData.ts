export enum AddonsEnum {
 onlineService = "online service",
 largerStorage = "larger storage",
 customizable = "customizable profile",
}

const ADDONS_DATA = {
 title: "Pick add-ons",
 desc: "Add-ons help enhance your gaming experience.",
 inputs: [
  {
   type: AddonsEnum.onlineService,
   desc: "Access to multiplayer games",
   priceMonthly: 1,
   priceYearly: 10,
   label: "Online service",
  },
  {
   type: AddonsEnum.largerStorage,
   desc: "Extra 1 TB of cloud save",
   priceMonthly: 2,
   priceYearly: 20,
   label: "Larger storage",
  },
  {
   type: AddonsEnum.customizable,
   desc: "Custom theme on your profile",
   priceMonthly: 2,
   priceYearly: 20,
   label: "Customizable profile",
  },
 ],
};

export default ADDONS_DATA;
