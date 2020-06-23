// Contracts
module.exports = () => {

    const mockContracts = [
        {
            contractNumber: 'E0654',
            organizationType: 'Employer/Union Only Direct Contract PDP',
            contractName: 'Ibt Voluntary Employee Benefits Trust',
            organizationMarketingName: 'TEAMStar Medicare Part D Prescription Drug Program',
            parentOrganization: 'Ibt Voluntary Employee Benefits Trust',
            ratings: [
                {
                    year: 2019,
                    partCSummary: 3.5,
                    partDSummary: 4.5,
                    overall: 4
                }
            ]
        },
        {
            contractNumber: 'E3014',
            organizationType: 'Demo',
            organizationMarketingName: 'Pennsylvania Public School Employees Retirement Sy',
            contractName: 'Psers Hop Program',
            parentOrganization: 'Commonwealth of PA Pub Schools Retirement System',
            ratings: [
                {
                    year: 2019,
                    partCSummary: 3.5,
                    partDSummary: 4,
                    overall: 3.5
                }
            ]
        },
        {
            contractNumber: 'E4744',
            organizationType: 'Local CCP',
            contractName: 'Modot/mshp Medical And Life Insurance Plan',
            organizationMarketingName: 'Missouri Department of Transportation',
            parentOrganization: 'Missouri Highways and Transportation Commission',
            ratings: [
                {
                    year: 2019,
                    partCSummary: 3,
                    partDSummary: 3.5,
                    overall: 3.5
                }
            ]
        },
        {
            contractNumber: 'H0022',
            organizationType: 'Local CCP',
            contractName: 'Buckeye Community Health Plan, Inc.',
            organizationMarketingName: 'Buckeye Health Plan - MyCare Ohio',
            parentOrganization: 'Centene Corporation',
            ratings: [
                {
                    year: 2019,
                    partCSummary: 4.5,
                    partDSummary: 4,
                    overall: 4
                }
            ]
        },
        {
            contractNumber: 'H0028',
            organizationType: 'Local CCP',
            contractName: 'Cha Hmo, Inc.',
            organizationMarketingName: 'Humana',
            parentOrganization: 'Humana Inc.',
            ratings: [
                {
                    year: 2019,
                    partCSummary: 3.5,
                    partDSummary: 4,
                    overall: 3.5
                }
            ]
        },
        {
            contractNumber: 'H0148',
            organizationType: 'Local CCP',
            contractName: 'Coordinated Care Of Washington, Inc.',
            organizationMarketingName: 'Allwell',
            parentOrganization: 'Centene Corporation',
            ratings: [
                {
                    year: 2019,
                    partCSummary: 4,
                    partDSummary: 5,
                    overall: 4.5
                }
            ]
        },
        {
            contractNumber: 'H0107',
            organizationType: 'Demo',
            contractName: 'Superior Healthplan Community Solutions, Inc.',
            organizationMarketingName: 'Allwell',
            parentOrganization: 'Centene Corporation',
            ratings: [
                {
                    year: 2019,
                    partCSummary: 3,
                    partDSummary: 3.5,
                    overall: 3
                }
            ]
        },
        {
            contractNumber: 'H0104',
            organizationType: 'Local CCP',
            contractName: ' Wellcare Health Insurance Of New York, Inc.',
            organizationMarketingName: 'Wellcare',
            parentOrganization: 'WellCare Health Plans, Inc.',
            ratings: [
                {
                    year: 2019,
                    partCSummary: 4.5,
                    partDSummary: 3.5,
                    overall: 4.5
                }
            ]
        },
        {
            contractNumber: 'H0088',
            organizationType: 'Local CCP',
            contractName: 'Blue Cross And Blue Shield Of Alabama',
            organizationMarketingName: 'Blue Advantage (PPO)',
            parentOrganization: 'BlueCross BlueShield of Alabama',
            ratings: [
                {
                    year: 2019,
                    partCSummary: 4,
                    partDSummary: 4.5,
                    overall: 4
                }
            ]
        },
        {
            contractNumber: 'H0062',
            organizationType: 'Demo',
            contractName: 'Health Care Service Corporation',
            organizationMarketingName: 'Blue Cross and Blue Shield of Montana',
            parentOrganization: 'Health Care Service Corporation',
            ratings: [
                {
                    year: 2019,
                    partCSummary: 3.5,
                    partDSummary: 3,
                    overall: 3.5
                }
            ]
        }
    ];


    // Generate IDs for each index
    const data = [];
    for (let i = 0; i < mockContracts.length; i++) {
        data.push(Object.assign(mockContracts[i], { id: i }))
    }


    return data
}