interface b {
  data: any;
  k: string;
}

abstract class C<T extends b> {
  abstract atributC: T["data"];
}
