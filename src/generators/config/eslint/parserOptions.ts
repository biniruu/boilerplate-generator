/**
 * @typescript-eslint/parser
 * {@link https://typescript-eslint.io/packages/parser}
 *
 * project : tsconfig.json 경로 설정. true로 설정하면 각 소스파일에서 가장 가까운 경로에 있는 tsconfig.json 파일을 자동으로 찾는다.
 * tsconfigRootDir : project에서 제공한 tsconfig의 상대 경로에 대한 루트 디렉토리 제공
 */
const parserOptions = {
  project: true,
  tsconfigRootDir: 'replace tsconfigRootDir',
}

export { parserOptions }
