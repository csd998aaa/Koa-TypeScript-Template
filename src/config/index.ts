interface DB {
    path: string;
    port: number;
    database: string;
    user: string;
    password: string;
}
// 数据库配置
export const db: DB = {
    path: 'localhost',
    port: 3308,
    database: '',
    user: '',
    password: ''
}
export const port:number = 8000
export const domain:string = `http://localhost:${port}/`

export const secret:string = ''
