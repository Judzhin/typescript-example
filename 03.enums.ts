enum Membership {
    Simple,
    Standart,
    Premium
}

const membership = Membership.Standart;
const membershipReverse = Membership[2]
console.log(membership); // number of memberships
console.log(membershipReverse); // name of memberships

enum SocialMedia {
    VK = 'VK',
    Facebook = 'Facebook',
    Twitter = 'Twitter',
    Instagram = 'Instagram'
}

const socialMedia = SocialMedia.VK;
console.log(socialMedia);
