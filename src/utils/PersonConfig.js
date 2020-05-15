const SEX_MAP = {
    F: 'female',
    M: 'male'
};

export class PersonConfig {
    constructor(data) {
        this.sex = SEX_MAP[data?.SEX];
        this.dateOfBirth = data?.BIRT?.DATE;
        this.dateOfDeath = data?.DEAT?.DATE;
        this.fullName = data?.NAME;

        const NAME = data?.NAME?.split(' ');
        const GIVN = data?.GIVN?.split(' ');
        this.firstName = NAME ? NAME[0] : GIVN ? GIVN[0] : '';
        this.middleName = NAME ? NAME[1] : '';
        this.lastName = NAME ? NAME[2] : '';
        this.maidenName = NAME ? NAME[3] : '';

        this.familyAsChild = data?.FAMC;
        this.familyAsSpouse  = data?.FAMS;
    }
}