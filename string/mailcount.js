var mails = emailData.split(/\#\#\|\|\#\#/).map(function(mail) {
  var mailParts = mail.split(/\#\/\#/);
  return {
    sender: mailParts[0].split(/^From\: /)[1],
    subject: mailParts[1].trim().split(/^Subject\: /)[1],
    date: new Date(mailParts[2].trim().split(/^Date\: /)[1]),
    recipient: mailParts[3].trim().split(/^To\: /)[1],
    body: mailParts[4].trim(),
  }
}).sort(function(mail1, mail2) {
    return mail1.date > mail2.date;
  });

function formatDate(mail) {
  return String(new Date(mail.date)).split(' ').slice(0, 4).join(' ');
}

function dateRange(mails) {
  var firstDate = formatDate(mails[0]);
  var lastDate = formatDate(mails[mails.length - 1])
  return firstDate + ' - ' + lastDate;
}

function mailCount(mails) {
  console.log('Count of Email: ' + mails.length);
  console.log('Date Range: ' + dateRange(mails));
}