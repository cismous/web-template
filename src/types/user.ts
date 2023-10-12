export interface LoginRequest {
  tel: string;
  password: string;
}

export interface LoginForm extends LoginRequest {
  password_again?: string;
  is_init?: boolean;
}

export interface CreateUserRequest {
  /** 用户名 */
  user_name: string;
  /** 手机号 */
  tel: string;
  /** 身份角色 */
  identity?: number;
  /** 权限 */
  role_list?: number[];
}

export interface UpdateUserRoleRequest {
  /** 用户ID */
  id: number;
  /** 权限列表 */
  role_list: number[];
}

export interface CreateUserData extends Omit<CreateUserRequest, "role_list"> {
  /** 企业ID */
  enterprise_id: number;
  role_list?: string;
}

export interface UserRecord extends CreateUserData {
  /** 用户ID */
  id: number;
  /** 创建时间 */
  created_at: Date;
  /** 更新时间 */
  updated_at: Date;
}

export interface UserResponse extends Omit<CreateUserData, "role_list"> {
  /** 权限 */
  role_list?: number[];
}
