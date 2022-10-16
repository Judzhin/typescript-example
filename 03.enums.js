var Membership;
(function (Membership) {
    Membership[Membership["Simple"] = 0] = "Simple";
    Membership[Membership["Standart"] = 1] = "Standart";
    Membership[Membership["Premium"] = 2] = "Premium";
})(Membership || (Membership = {}));
var membership = Membership.Standart;
var membershipReverse = Membership[2];
console.log(membership); // number of memberships
console.log(membershipReverse); // name of memberships
var SocialMedia;
(function (SocialMedia) {
    SocialMedia["VK"] = "VK";
    SocialMedia["Facebook"] = "Facebook";
    SocialMedia["Twitter"] = "Twitter";
    SocialMedia["Instagram"] = "Instagram";
})(SocialMedia || (SocialMedia = {}));
var socialMedia = SocialMedia.VK;
console.log(socialMedia);
