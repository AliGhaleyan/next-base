export interface Menu {
    id: number,
    name: string,
    type: string,
    link: string,
    parent_id: number,
    is_active: boolean,
    media: File,
    children: Menu[],
    created_at: string,
    updated_at: string
}
