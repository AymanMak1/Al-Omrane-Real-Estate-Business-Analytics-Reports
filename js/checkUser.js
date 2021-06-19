let checkUser = () => {
    Swal.fire({
        title: 'Submit your CIN',
        input: 'text',
        inputAttributes: {
            autocapitalize: 'off'
        },
        showCancelButton: true,
        confirmButtonText: 'Look up',
        showLoaderOnConfirm: true,
        preConfirm: (cin) => {
            return fetch(`./accounts/accounts.txt`)
            .then((response) =>  response.text())
            .then ((data) => {
                let found = data.includes(cin);
                if (found === false) {
                 throw new Error(response.statusText)
                }
                Swal.fire({
                    icon: 'success',
                    title: 'Account has been found',
                    html:
                    '<b>Choose a report :</b><br/>' +
                    '<a href="./Reports/Omrane_DataExplorerEDA.html">DataExplorer Exploratory Data Analysis Report</a> <br/>' +
                    '<a href="./Reports/Omrane_dlookrEDA.html">dlookr Exploratory Data Analysis Report</a> <br/>' +
                    '<a href="./Reports/Omrane_SmartEDA.html"> SmartEDA Exploratory Data Analysis Report</a> <br/>',
                    showConfirmButton: true,
                })
            })
            .catch(error => {
                Swal.showValidationMessage(
                  `Request failed: Account not found`
                )
            })
        }
    })
}