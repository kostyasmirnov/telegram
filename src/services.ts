import { assert } from 'console'
import { TransactionTypesService } from './service/transactionTypes'
import { CategoriesService } from './service/categories'
import { TransactionsService } from './service/transactions'
import { StatisticService } from './service/statisic'

const moneyMgrEmail = "money-mgr-tg-bot@money-mjr.iam.gserviceaccount.com"
const moneyMgrKey = "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCo6+j7TKKfyrWG\nmtrhNi1Pz2Qe+HDHzSZYYPLJ5kAh3G+53y9cMx3xBtysF6lIoRDEygQAur0kfUt1\nYLy2Tdv35nPTADhx0Prxpse9aIkqLx39PdHxyYjkRSlid8dyK/+fKqpYT/SzO3K7\nCmAMqOl1izZGw37R6NPciMjRv67VoUTFXR4BODJyWb8C+aNq2y2gQUjbzhSITNuu\nOk7QCDGH991h4Btqpn9wWprHoZ/Q8CmUdculSP2ztEY12VfwX0UpTY00amY6k+C8\nvH4Wha2e04XJh2Qiy6+lLGb430cK27JiH2Vhczk+IRKSlASX/Sl+Gklr6hJ96o1T\nzxC4EusFAgMBAAECgf9GZsrrkfxX5mU2oxbbsGHxER8NExp42OCKf91msGAkPtU8\nEygWZ9xlL827yPEF2qXdEG8CyR9miv0pIoeve+rAxmVcv2ys5JNJu4+mYUHWi2R6\n0FHBC5R3OAUy5nN+2Ey56yyi9EfLO6TN8ALfkfdKIBHeZ+oPVXgEFsFe5oBbPm28\ns+RRpBeOkvcR6dDNbYmjVYPFsU2B46t7jVqhi8OqN+gt455DHB6eUKZJME99oHXb\n2RaPVfL59zi212aahJctCtZNECK7ArelsB6ZTtP82GAl56aIr6P2lknCp+ktL6eE\njaFSZIwWBANe1yGNtX/JigGIejgCe5pJHBK8haECgYEA6x5u/3eiZLNpHgTDxk25\nnFfHe1A6pZL6FiO1sVhohLxfpK+oQETJO2584BAG4HbLhv6iz9ref4vbDQ+m6kJ5\nJC4NB1uok3fB0wa8mMcEVT2fQIOAUDj0a1Y7uEKCTrqp6AB1a1n/fawx7TkL9JQz\nJ6rDYiOEIROp1zEyW7tlGRkCgYEAt+xwx0uMw/+16d5f/Be/hCby0/WqzL67//D+\nzidXuLFdd8r8W55c8HprDjqn/1FtllvTJtBaYyK5uBuDXWbtJVXYQvBMjHRt33rf\neWxzjSXXXoDZz3ma56fnF4g322TyL6luc2+LtxYs4oBveb1fDEQEj3jFX8vg71cc\nwtucos0CgYEAqBXFvJTGX79zMqatXyNJwl9umNWuV5hPeWxmBDbz4ZDZv15kpi2G\nvxop4/URNX832XZI5tfNoNlW7Gt4JJkJCbhyUARS67n9suNqCL6edmHra6+XF8Lf\n2ax4XS4PAkGoHdfWGbzpTerAdpsF1P/t4jnOHGbPmuX30YO2QKYjjGECgYEAjiwz\nMZtxAMFV+aZwRAqHfLwu0TICCasW4E2Gag13fcl9GvDKCnhsF2hKAQHOg0qKj8QD\ngOlmNWPOdEawUS8S+d1WAsiGI7yMgkgVH2N6Hw21YdPwirTRzWi49jPSGcH6hGVQ\nf+Ml+S0nHR9zDIQaSPz7GXyd9eM/yUNpdCcW+bECgYAenlt4XoTh1IAJVkTLXtif\nlNrEQ9Aif2EQ84rm0PUl7xtLcwbUeUs5rdGQSRlThKhLzPUn6L6SOFgqIjm9dOD4\nmVr1S9lItBtpS6jKrI3D56wMB+CVyFaBL9h/fIA4BrxkF4/SnIhXKqye7GNResXs\niNKYZPD3Sqi9/vD82Vrd5Q==\n-----END PRIVATE KEY-----\n"


export const categoriesSvc =
    new CategoriesService("1jKn3mgyZeF5qvpjMrV-TkQqy9op2kSjq4d3t0xuqD6I", moneyMgrEmail!, moneyMgrKey!.replace(/\\n/g, '\n'))
export const transactionTypesSvc =
    new TransactionTypesService("1jKn3mgyZeF5qvpjMrV-TkQqy9op2kSjq4d3t0xuqD6I", moneyMgrEmail!, moneyMgrKey!.replace(/\\n/g, '\n'))
export const transactionsSvc =
    new TransactionsService("1jKn3mgyZeF5qvpjMrV-TkQqy9op2kSjq4d3t0xuqD6I", moneyMgrEmail!, moneyMgrKey!.replace(/\\n/g, '\n'))
export const statisticSvc =
    new StatisticService("1jKn3mgyZeF5qvpjMrV-TkQqy9op2kSjq4d3t0xuqD6I", moneyMgrEmail!, moneyMgrKey!.replace(/\\n/g, '\n'))

