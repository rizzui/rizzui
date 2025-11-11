import { useHistory } from '@docusaurus/router';
import { cn } from 'rizzui/cn';
import { Title } from 'rizzui/title';
import { Text } from 'rizzui/text';

export default function ComponentCard({ item }: any) {
  const history = useHistory();

  return (
    <div
      onClick={() => history.push(item.path)}
      className={cn(
        'flex flex-col rounded-xl border border-border flex-shrink-0 relative overflow-hidden group/card cursor-pointer transition-all [box-shadow:0_1.5px_0_var(--border-color)]'
      )}
    >
      <div className="flex h-full justify-center items-center px-6 py-12 min-h-[256px] before:h-[calc(100%-6px)] before:absolute before:bg-gradient-to-b before:from-gray-100/60 before:-z-[1] before:inset-[3px] before:w-[calc(100%-6px)] before:rounded-t-lg relative">
        {item.component}
      </div>

      <div className="p-6">
        <Title as="h5" className="font-semibold !mb-1 !text-lg">
          {item.name}
        </Title>
        <Text className="text-gray-500 !mb-0">{item.count} components</Text>
      </div>
    </div>
  );
}
