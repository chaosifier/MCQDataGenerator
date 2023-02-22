let data = [];
let formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSd0FQ2AS1I7e8m3BCalInJrBFVURLeS0SNmnjLVDwhdRZDRvQ/formResponse";
for (let i = 0; i < data.length; i++) {
    await wait(10);

    let body1 = [
        {
            "entry.1201390621": "Disagree",
            "entry.810233715": "Strongly agree",
            "entry.1201390621_sentinel": "",
            "entry.810233715_sentinel": "",
            "fvv": "1",
            "partialResponse": [[[null, 432035652, ["Yes"], 0], [null, 105174424, ["Male"], 0], [null, 1601470243, ["26-30"], 0], [null, 2079177691, ["Private office"], 0], [null, 1855490564, ["SEE"], 0], [null, 470650279, ["Sometimes"], 0], [null, 1017453748, ["Both"], 0], [null, 330616609, ["Strongly disagree"], 0], [null, 176475674, ["Strongly disagree"], 0], [null, 681683264, ["Strongly disagree"], 0], [null, 2086583425, ["Strongly disagree"], 0], [null, 1833287906, ["Strongly disagree"], 0], [null, 210298233, ["Neutral"], 0], [null, 237360999, ["Strongly agree"], 0], [null, 1454609976, ["Neutral"], 0], [null, 453639649, ["Agree"], 0], [null, 1577621044, ["Strongly disagree"], 0], [null, 1696350445, ["Strongly disagree"], 0], [null, 768612062, ["Disagree"], 0], [null, 916041358, ["Strongly disagree"], 0], [null, 395875143, ["Neutral"], 0], [null, 1670354139, ["Agree"], 0], [null, 650811852, ["Agree"], 0], [null, 1383454012, ["Agree"], 0], [null, 1363080812, ["Strongly agree"], 0], [null, 1779558911, ["Strongly agree"], 0], [null, 1371726936, ["Disagree"], 0], [null, 1716220518, ["Strongly agree"], 0], [null, 50120080, ["Strongly agree"], 0]], null, "2215482656618116702"],
            "pageHistory": "0,1,2,3,4,5,6,7,8,9",
            "fbzx": "2215482656618116702"
        }
    ];

    let body = "entry.1201390621=Disagree&entry.810233715=Strongly+agree&entry.1201390621_sentinel=&entry.810233715_sentinel=&fvv=1&partialResponse=%5B%5B%5Bnull%2C432035652%2C%5B%22Yes%22%5D%2C0%5D%2C%5Bnull%2C105174424%2C%5B%22Male%22%5D%2C0%5D%2C%5Bnull%2C1601470243%2C%5B%2226-30%22%5D%2C0%5D%2C%5Bnull%2C2079177691%2C%5B%22Private+office%22%5D%2C0%5D%2C%5Bnull%2C1855490564%2C%5B%22SEE%22%5D%2C0%5D%2C%5Bnull%2C470650279%2C%5B%22Sometimes%22%5D%2C0%5D%2C%5Bnull%2C1017453748%2C%5B%22Both%22%5D%2C0%5D%2C%5Bnull%2C330616609%2C%5B%22Strongly+disagree%22%5D%2C0%5D%2C%5Bnull%2C176475674%2C%5B%22Strongly+disagree%22%5D%2C0%5D%2C%5Bnull%2C681683264%2C%5B%22Strongly+disagree%22%5D%2C0%5D%2C%5Bnull%2C2086583425%2C%5B%22Strongly+disagree%22%5D%2C0%5D%2C%5Bnull%2C1833287906%2C%5B%22Strongly+disagree%22%5D%2C0%5D%2C%5Bnull%2C210298233%2C%5B%22Neutral%22%5D%2C0%5D%2C%5Bnull%2C237360999%2C%5B%22Strongly+agree%22%5D%2C0%5D%2C%5Bnull%2C1454609976%2C%5B%22Neutral%22%5D%2C0%5D%2C%5Bnull%2C453639649%2C%5B%22Agree%22%5D%2C0%5D%2C%5Bnull%2C1577621044%2C%5B%22Strongly+disagree%22%5D%2C0%5D%2C%5Bnull%2C1696350445%2C%5B%22Strongly+disagree%22%5D%2C0%5D%2C%5Bnull%2C768612062%2C%5B%22Disagree%22%5D%2C0%5D%2C%5Bnull%2C916041358%2C%5B%22Strongly+disagree%22%5D%2C0%5D%2C%5Bnull%2C395875143%2C%5B%22Neutral%22%5D%2C0%5D%2C%5Bnull%2C1670354139%2C%5B%22Agree%22%5D%2C0%5D%2C%5Bnull%2C650811852%2C%5B%22Agree%22%5D%2C0%5D%2C%5Bnull%2C1383454012%2C%5B%22Agree%22%5D%2C0%5D%2C%5Bnull%2C1363080812%2C%5B%22Strongly+agree%22%5D%2C0%5D%2C%5Bnull%2C1779558911%2C%5B%22Strongly+agree%22%5D%2C0%5D%2C%5Bnull%2C1371726936%2C%5B%22Disagree%22%5D%2C0%5D%2C%5Bnull%2C1716220518%2C%5B%22Strongly+agree%22%5D%2C0%5D%2C%5Bnull%2C50120080%2C%5B%22Strongly+agree%22%5D%2C0%5D%5D%2Cnull%2C%222215482656618116702%22%5D&pageHistory=0%2C1%2C2%2C3%2C4%2C5%2C6%2C7%2C8%2C9&fbzx=2215482656618116702";
    fetch(formUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: body,
    });
}