const ahtStretch = 170
const ahtTarget = 190
const ahtThreshhold = 210
const wAhtStretch = 10
const wAhtTarget = 5
const wAhtThreshhold = 2.5

const stretchKo = 100
const targetKo = 87
const treshholdKo = 75
const wStretchKo = 13
const wTargetKo = 6.5
const wTreshholdKo = 3.25

/*
const predlStretch = 20
const predlTarget = 19
const predlThreshhold = 18
const wPredlStretch = 3.75
const wPredlTarget = 1.88
const wPredlThreshhold = 0.94

const campaignStretch = 4
const campaignTarget = 3.5
const campaignThreshhold = 3
const wCampaignStretch = 11.25
const wCampaignTarget = 5.63
const wCampaignThreshhold = 2.81
*/

const stretchGi = 0.9
const targetGi = 0.6
const treshholdGi = 0.3
const wStretchGi = 24
const wTargetGi = 12
const wtreshholdGi = 6

const stretchCsi = 91
const targetCsi = 89.5
const treshholdCsi = 86
const wStretchCsi = 13
const wTargetCsi = 6.5
const wTreshholdCsi = 3.25









//чем больше - тем хуже
function countAhtPremium(currentAht, stretchAht, targetAht, treshholdAht, wStretchAht, wTargetAht, wTreshholdAht) //функция подсчета премии за AHT
{
    let ahtPremium;
    if (currentAht > treshholdAht) { //если больше или равно трешхолда
        ahtPremium = 0;
    } else if (currentAht == treshholdAht) { //если ровно трешхолд
        ahtPremium = wTreshholdAht;
    } else if (currentAht == targetAht) { //если ровно таргет
        ahtPremium = wTargetAht; 
    } else if (currentAht <= stretchAht) { //если меньше или равно стретча
        ahtPremium = wStretchAht;
    } else if (currentAht > stretchAht && currentAht < targetAht) { //если больше стретча, но меньше таргета  155<x<165
        ahtPremium = (currentAht - targetAht) / (stretchAht - targetAht) * (wStretchAht - wTargetAht) + wTargetAht;
    } else if (currentAht > targetAht && currentAht < treshholdAht) { //если больше таргета, но меньше трешхолда 165<x<175
        ahtPremium = (currentAht - treshholdAht) / (targetAht - treshholdAht) * (wTargetAht - wTreshholdAht) + wTreshholdAht;
    } 
return ahtPremium
}

//countAhtPremium(165, ahtStretch, ahtTarget, ahtThreshhold, wAhtStretch, wAhtTarget, wAhtThreshhold) //вызов функции подсчета премии за AHT


//чем меньше - тем хуже
function countKoPremium (currentKo, stretchKo, targetKo, treshholdKo, wStretchKo, wTargetKo, wTreshholdKo) //функция подсчета премии за КО
{
    let koPremium;
     if (currentKo < treshholdKo) { //если меньше трешхолда
        koPremium = 0;
    } else if (currentKo == treshholdKo) { //если ровно трешхолд
        koPremium = wTreshholdKo;
    } else if (currentKo >= stretchKo) { //если больше или равно стретча
        koPremium = wStretchKo;
    } else if (currentKo == targetKo) { //если таргет
        koPremium = wTargetKo;
    } else if (currentKo > targetKo && currentKo < stretchKo) { //если меньше стретча, но больше таргета
        koPremium = (currentKo - targetKo) / (stretchKo - targetKo) * (wStretchKo - wTargetKo) + wTargetKo;
    } else if (currentKo < treshholdKo && currentKo < targetKo) { //если меньше таргета, но больше трешхолда
        koPremium = (currentKo - treshholdKo) / (targetKo - treshholdKo) * (wTargetKo - wTreshholdKo) + wTreshholdKo;
    }
return(koPremium)
}


//countKoPremium(16, koStretch, koTarget, koThreshhold, wKoStretch, wKoTarget, wKoThreshhold) //вызов функции подсчета премии за KO


//чем больше - тем лучше
/*
function countPredlPremium(currentPreld, stretchPreld, targetPreld, treshholdPreld, wStretchPreld, wTargetPreld, wTreshholdPreld) //функция подсчета премии за предложки
{
    let predlPremium;
     if (currentPreld < treshholdPreld) { //если меньше трешхолда
        predlPremium = 0;
    } else if (currentPreld == treshholdPreld) { //если ровно трешхолд
        predlPremium = wtreshholdPreld;
    } else if (currentPreld >= stretchPreld) { //если болше или равно стретча
        predlPremium = wStretchPreld;
    } else if (currentPreld == targetPreld) { //если таргет
        predlPremium = wTargetPreld;
    } else if (currentPreld > targetPreld && currentPreld < stretchPreld) { //если меньше стретча, но больше таргета  20<x<19
        predlPremium = (currentPreld - targetPreld) / (stretchPreld - targetPreld) * (wStretchPreld - wTargetPreld) + wTargetPreld;
    } else if (currentPreld > treshholdPreld && currentPreld < targetPreld) { //если меньше таргета, но больше трешхолда  19<x<18
        predlPremium = (currentPreld - treshholdPreld) / (targetPreld - treshholdPreld) * (wTargetPreld - wTreshholdPreld) + wTreshholdPreld;
    }
return(predlPremium)

}


//countPredlPremium(19, predlStretch, predlTarget, predlThreshhold, wPredlStretch, wPredlTarget, wPredlThreshhold) //вызов функции подсчета премии предложений



//чем больше - тем лучше
function countCampaignPremium(currentCampaign, stretchCampaign, targetCampaign, treshholdCampaign, wStretchCampaign, wTargetCampaign, wTreshholdCampaign) //функция подсчета премии за СМ
{
    let campaignPremium;
     if (currentCampaign < treshholdCampaign) { //если меньше трешхолда
        campaignPremium = 0;
    } else if (currentCampaign == treshholdCampaign) { //если ровно трешхолд
        campaignPremium = wtreshholdCampaign;
    } else if (currentCampaign >= stretchCampaign) { //если болше или равно стретча
        campaignPremium = wStretchCampaign;
    } else if (currentCampaign == targetCampaign) { //если таргет
        campaignPremium = wTargetCampaign;
    } else if (currentCampaign > targetCampaign && currentCampaign < stretchCampaign) { //если меньше стретча, но больше таргета  20<x<19
        campaignPremium = (currentCampaign - targetCampaign) / (stretchCampaign - targetCampaign) * (wStretchCampaign - wTargetCampaign) + wTargetCampaign;
    } else if (currentCampaign > treshholdCampaign && currentCampaign < targetCampaign) { //если меньше таргета, но больше трешхолда  19<x<18
        campaignPremium = (currentCampaign - treshholdCampaign) / (targetCampaign - treshholdCampaign) * (wTargetCampaign - wTreshholdCampaign) + wTreshholdCampaign;
    }
return(campaignPremium)

}
*/


//countCampaignPremium(i, campaignStretch, campaignTarget, campaignThreshhold, wCampaignStretch, wCampaignTarget, wCampaignThreshhold)) //вызов функции подсчета премии компейна


//чем больше - тем лучше
function countGiPremium(currentGi, stretchGi, targetGi, treshholdGi, wStretchGi, wTargetGi, wTreshholdGi) //функция подсчета премии за заказы
{
    let giPremium;
     if (currentGi < treshholdGi) { //если меньше трешхолда
        giPremium = 0;
    } else if (currentGi == treshholdGi) { //если ровно трешхолд
        giPremium = wtreshholdGi;
    } else if (currentGi >= stretchGi) { //если болше или равно стретча
        giPremium = wStretchGi;
    } else if (currentGi == targetGi) { //если таргет
        giPremium = wTargetGi;
    } else if (currentGi > targetGi && currentGi < stretchGi) { //если меньше стретча, но больше таргета  20<x<19
        giPremium = (currentGi - targetGi) / (stretchGi - targetGi) * (wStretchGi - wTargetGi) + wTargetGi;
    } else if (currentGi > treshholdGi && currentGi < targetGi) { //если меньше таргета, но больше трешхолда  19<x<18
        giPremium = (currentGi - treshholdGi) / (targetGi - treshholdGi) * (wTargetGi - wTreshholdGi) + wTreshholdGi;
    }
return(giPremium)
}

//countGiPremium(i, giStretch, giTarget, giThreshhold, wGiStretch, wGiTarget, wGiThreshhold)) //вызов функции подсчета премии заказов


//чем больше - тем лучше
function countCsiPremium(currentCsi, stretchCsi, targetCsi, treshholdCsi, wStretchCsi, wTargetCsi, wTreshholdCsi) //функция подсчета премии за оценки
{
    let csiPremium;
     if (currentCsi < treshholdCsi) { //если меньше трешхолда
        csiPremium = 0;
    } else if (currentCsi == treshholdCsi) { //если ровно трешхолд
        csiPremium = wtreshholdCsi;
    } else if (currentCsi >= stretchCsi) { //если болше или равно стретча
        csiPremium = wStretchCsi;
    } else if (currentCsi == targetCsi) { //если таргет
        csiPremium = wTargetCsi;
    } else if (currentCsi > targetCsi && currentCsi < stretchCsi) { //если меньше стретча, но больше таргета  20<x<19
        csiPremium = (currentCsi - targetCsi) / (stretchCsi - targetCsi) * (wStretchCsi - wTargetCsi) + wTargetCsi;
    } else if (currentCsi > treshholdCsi && currentCsi < targetCsi) { //если меньше таргета, но больше трешхолда  19<x<18
        csiPremium = (currentCsi - treshholdCsi) / (targetCsi - treshholdCsi) * (wTargetCsi - wTreshholdCsi) + wTreshholdCsi;
    }
return(csiPremium)

}



//countCsiPremium(i, csiStretch, csiTarget, csiThreshhold, wCsiStretch, wCsiTarget, wCsiThreshhold) //вызов функции подсчета премии оценок







const ahtInput = document.getElementById('hourlyRate')
const koInput = document.getElementById('hoursPerDay')
//const predlInput = document.getElementById('daysPerWeek')
//const campaignInput = document.getElementById('campaign')
const giInput = document.getElementById('gi')
const csiInput = document.getElementById('csi')
const adherenceInput = document.getElementById('adherence')
const salaryInput = document.getElementById('salary')


ahtInput.addEventListener('input', calculateSalary)
koInput.addEventListener('input', calculateSalary)
//predlInput.addEventListener('input', calculateSalary)
//campaignInput.addEventListener('input', calculateSalary)
giInput.addEventListener('input', calculateSalary)
csiInput.addEventListener('input', calculateSalary)
adherenceInput.addEventListener('input', calculateSalary)
salaryInput.addEventListener('input', calculateSalary)





function calculateSalary() {

    let aht = parseFloat(ahtInput.value)
    let ko = parseFloat(koInput.value)
    //let predl = parseFloat(predlInput.value)
    //let campaign = parseFloat(campaignInput.value)
    let gi = parseFloat(giInput.value)
    let csi = parseFloat(csiInput.value)
    let adherence = parseFloat(adherenceInput.value)
    let salary = parseFloat(salaryInput.value)
    

    if (aht > ahtThreshhold) { //если больше трешхолда
        aht = 0;
    } else if (aht == ahtThreshhold) { //если ровно трешхолд
        aht = wAhtThreshhold;
    } else if (aht == ahtTarget) { //если ровно таргет
        aht = wAhtTarget; 
    } else if (aht <= ahtStretch) { //если меньше или равно стретча
        aht = wAhtStretch;
    } else if (aht > ahtStretch && aht < ahtTarget) { //если больше стретча, но меньше таргета  155<x<165
        aht = (aht - ahtTarget) / (ahtStretch - ahtTarget) * (wAhtStretch - wAhtTarget) + wAhtTarget;
    } else if (aht > ahtTarget && aht < ahtThreshhold) { //если больше таргета, но меньше трешхолда 165<x<175
        aht = (aht - ahtThreshhold) / (ahtTarget - ahtThreshhold) * (wAhtTarget - wAhtThreshhold) + wAhtThreshhold;
    } 


 
    if (ko < treshholdKo) { //если меньше трешхолда
        ko = 0;
   } else if (ko == treshholdKo) { //если ровно трешхолд
        ko = wTreshholdKo;
   } else if (ko >= stretchKo) { //если больше или равно стретча
        ko = wStretchKo;
   } else if (ko == targetKo) { //если таргет
        ko = wTargetKo;
   } else if (ko > targetKo && ko < stretchKo) { //если меньше стретча, но больше таргета
        ko = (ko - targetKo) / (stretchKo - targetKo) * (wStretchKo - wTargetKo) + wTargetKo;
   } else if (ko > treshholdKo && ko < targetKo) { //если меньше таргета, но больше трешхолда
        ko = (ko - treshholdKo) / (targetKo - treshholdKo) * (wTargetKo - wTreshholdKo) + wTreshholdKo;
   }



   if (gi < treshholdGi) { //если меньше трешхолда
        gi = 0;
  } else if (gi == treshholdGi) { //если ровно трешхолд
        gi = wtreshholdGi;
  } else if (gi >= stretchGi) { //если болше или равно стретча
        gi = wStretchGi;
  } else if (gi == targetGi) { //если таргет
        gi = wTargetGi;
  } else if (gi > targetGi && gi < stretchGi) { //если меньше стретча, но больше таргета  20<x<19
        gi = (gi - targetGi) / (stretchGi - targetGi) * (wStretchGi - wTargetGi) + wTargetGi;
  } else if (gi> treshholdGi && gi < targetGi) { //если меньше таргета, но больше трешхолда  19<x<18
        gi = (gi - treshholdGi) / (targetGi - treshholdGi) * (wTargetGi - wtreshholdGi) + wtreshholdGi;
  }



  if (csi < treshholdCsi) { //если меньше трешхолда
        csi = 0;
 } else if (csi == treshholdCsi) { //если ровно трешхолд
        csi = wTreshholdCsi;
 } else if (csi >= stretchCsi) { //если болше или равно стретча
        csi = wStretchCsi;
 } else if (csi == targetCsi) { //если таргет
        csi = wTargetCsi;
 } else if (csi > targetCsi && csi < stretchCsi) { //если меньше стретча, но больше таргета  20<x<19
        csi = (csi - targetCsi) / (stretchCsi - targetCsi) * (wStretchCsi - wTargetCsi) + wTargetCsi;
 } else if (csi > treshholdCsi && csi < targetCsi) { //если меньше таргета, но больше трешхолда  19<x<18
        csi = (csi - treshholdCsi) / (targetCsi - treshholdCsi) * (wTargetCsi - wTreshholdCsi) + wTreshholdCsi;
 }







displayAmounts(aht, ko, gi, csi, adherence, salary)

}


function displayAmounts (ahtAmount, koAmount, giAmount, csiAmount, adherenceAmount, salaryAmount) {
    


/*
Чтобы обновлять текстовое содержимое элементов только в случае, если соответствующие переменные имеют значения, отличные от NaN, вы можете использовать функцию, которая проверяет, является ли значение переменной NaN перед обновлением текстового содержимого. Вот пример такой функции и как её использовать для обновления текстового содержимого элементов:


function updateTextContentIfNotNaN(elementId, amount) {
  if (!isNaN(amount)) {
    document.getElementById(elementId).textContent = `${amount.toFixed(2)}`;
  }
}

// Предполагаемые вычисленные значения
let ahtAmount; // и так далее для других переменных...

// Обновление текстового содержимого элементов, если значения не NaN
updateTextContentIfNotNaN('hourlyAmount', ahtAmount);
updateTextContentIfNotNaN('dailyAmount', koAmount);
updateTextContentIfNotNaN('weeklyAmount', predlAmount);
updateTextContentIfNotNaN('monthlyAmount', campaignAmount);
updateTextContentIfNotNaN('annualAmount', giAmount);
updateTextContentIfNotNaN('csiAmount', csiAmount);
updateTextContentIfNotNaN('adherenceAmount', adherenceAmount);
updateTextContentIfNotNaN('salaryAmount', salaryAmount);

*/

let prePremiumAmount = 0;
let premiumAmount = NaN;

prePremiumAmount = ahtAmount + koAmount + giAmount + csiAmount


if (adherenceAmount < 95) {
    premiumAmount = adherenceAmount / 95 * prePremiumAmount
}
else {
    premiumAmount = ahtAmount + koAmount + giAmount + csiAmount
}


let category;

if (premiumAmount >= 55) {
    category = " Звезда";
}
else if (premiumAmount < 55 && premiumAmount > 30) {
    category = " Ключевой";
}
else if (premiumAmount >= 15 && premiumAmount < 30) {
    category = " Среднячок";
}
else if (premiumAmount < 15) {
    category = " Черный список";
}




let zarplata = 0;

zarplata = salaryAmount * premiumAmount / 100 + salaryAmount



let withTaxes = 0;

withTaxes = zarplata * 0.87;



    if (!isNaN(ahtAmount)) {
    document.getElementById('hourlyAmount').textContent = `${ahtAmount.toFixed(2)}`
    }
    if (!isNaN(koAmount)) {
    document.getElementById('dailyAmount').textContent = `${koAmount.toFixed(2)}`
    }
    //document.getElementById('weeklyAmount').textContent = `${predlAmount.toFixed(2)}`
    //document.getElementById('monthlyAmount').textContent = `${campaignAmount.toFixed(2)}`
    if (!isNaN(giAmount)) {
    document.getElementById('annualAmount').textContent = `${giAmount.toFixed(2)}`
    }
    if (!isNaN(csiAmount)) {
    document.getElementById('csiAmount').textContent = `${csiAmount.toFixed(2)}`
    }
    //if (!isNaN(adherenceAmount)) {
    //document.getElementById('adherenceAmount').textContent = `${adherenceAmount.toFixed(2)}`
    //}
    if (!isNaN(zarplata)) {
    document.getElementById('salaryAmount').textContent = `${zarplata.toFixed(0)}`
    }
    if (!isNaN(premiumAmount) && !isNaN(adherenceAmount)) {
    document.getElementById('premiumAmount').textContent = `${premiumAmount.toFixed(2)}` //общая премия
    }
    if (!category == 0) {
    document.getElementById('category').textContent = `${category}` 
    }
    if (!withTaxes == 0) {
    document.getElementById('withTaxes').textContent = `${withTaxes.toFixed(2)}` 
    }



}




calculateSalary()











