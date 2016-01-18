let birthdayDate =
  prompt('Podaj date w formacie: dd mm yyyy', '11 05 1997')
    .split(' ')
    .reverse();

let birthday = new Date(...birthdayDate).getTime();

let liveTime = new Date(Date.now() - birthday);

let years = liveTime.getUTCFullYear() - 1970;
let months = liveTime.getUTCMonth() + 1;
let days = liveTime.getUTCDate() - 1;

if (months == 12) {
  months = 0;
  years++;
}

document.body.innerText = `Masz ${years} lat ${months} miesiecy i ${days} dni`;
