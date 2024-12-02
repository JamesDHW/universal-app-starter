import { formatFiles, generateFiles, names, Tree } from '@nx/devkit';
import * as path from 'path';
import { AddAdrGeneratorSchema } from './schema';

export default async function (tree: Tree, schema: AddAdrGeneratorSchema) {
  const formattedName = names(schema.decisionName).fileName; // Formats the decision name (e.g., "Use Pnpm" -> "use-pnpm")
  const date = new Date().toISOString().split('T')[0]; // Gets the current date (YYYY-MM-DD)
  const fileName = `${date}-${formattedName}.md`; // Constructs the filename

  generateFiles(
    tree,
    path.join(__dirname, 'files'), // Path to the template files folder
    'docs/docs/architectural-decision-records', // Destination folder
    {
      template: '',
      fileName,
      decisionName: schema.decisionName,
      today: date,
    }
  );

  await formatFiles(tree);
}
