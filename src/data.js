import { Chance } from "chance";

const chance = new Chance();

export const navigationItems = chance.n(() => ({
    selected: false,
    icon: '',
    label: chance.word()
}), 8)

export const tableData = chance.n(() => ({
    avatar: chance.avatar(),
    name: chance.name(),
    number: chance.phone(),
    date: chance.date(),
    time: chance.time(),
    accepted: chance.bool()
}), 6)

export const statistics = chance.n(() => ({
    statistic: chance.natural(),
    key: chance.word(),
    icon: ''
}), 4)

export const getProfile = () => ({
    image: chance.avatar(),
    name: chance.name(),
    job: chance.word(),
    meta: chance.n(({
        name: chance.word(),
        stat: chance.natural(),
    }), 3)
})
